import dynamic from "next/dynamic"
import Head from "next/head"
import { FC } from "react"

import { Loading, Spacer } from "@geist-ui/core"
import packageData from "package.json"
import { useRecoilValueLoadable } from "recoil"

import { queryAPOD } from "@/recoil/apod"
import { queryFeedParameters } from "@/recoil/feed"

const CardAPOD = dynamic(() => import("@/components/Card/CardAPOD"))
const TableReport = dynamic(() => import("@/components/Table/TableReport"))

const Home: FC = () => {
  const loadableAPOD = useRecoilValueLoadable(queryAPOD)
  const loadableFeed = useRecoilValueLoadable(queryFeedParameters)

  const apod = loadableAPOD.contents
  const feed = loadableFeed.contents

  return (
    <>
      <Head>
        <title>{packageData.displayName}</title>
      </Head>
      {loadableAPOD.state === "hasValue" && !apod.code && !apod.error && (
        <>
          <CardAPOD {...apod} />
          <Spacer h={1} />
        </>
      )}
      {loadableFeed.state === "hasValue" && <TableReport {...feed} />}
      {(loadableFeed.state === "loading" ||
        loadableAPOD.state === "loading") && <Loading>Loading</Loading>}
    </>
  )
}

export default Home
