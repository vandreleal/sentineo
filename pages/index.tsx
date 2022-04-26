import dynamic from 'next/dynamic'
import Head from 'next/head'

import { queryAPOD } from '@/recoil/apod'
import { queryFeedParameters } from '@/recoil/feed'
import { Loading, Spacer } from '@geist-ui/react'
import { useRecoilValueLoadable } from 'recoil'

const CardAPOD = dynamic(() => import('@/components/Card/APOD'))
const TableReport = dynamic(() => import('@/components/Table/Report'))

function Home() {
  const loadableAPOD = useRecoilValueLoadable(queryAPOD)
  const loadableFeed = useRecoilValueLoadable(queryFeedParameters)

  const apod = loadableAPOD.contents
  const feed = loadableFeed.contents

  return (
    <>
      <Head>
        <title>SentiNEO</title>
      </Head>

      {/* APOD */}
      {loadableAPOD.state === 'hasValue' && !apod.code && !apod.error && (
        <>
          <CardAPOD data={apod} />
          <Spacer h={1} />
        </>
      )}

      {/* Feed */}
      {loadableFeed.state === 'hasValue' && <TableReport data={feed} />}

      {/* Loading */}
      {(loadableFeed.state === 'loading' || loadableAPOD.state === 'loading') && <Loading>Loading</Loading>}
    </>
  )
}

export default Home
