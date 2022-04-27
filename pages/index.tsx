import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Loading, Spacer } from '@geist-ui/react'
import { useRecoilValueLoadable } from 'recoil'

import { queryAPOD } from '@/recoil/apod'
import { queryFeedParameters } from '@/recoil/feed'

const CardAPOD = dynamic(() => import('@/components/Card/APOD'))
const TableReport = dynamic(() => import('@/components/Table/Report'))

const Home = () => {
  const loadableAPOD = useRecoilValueLoadable(queryAPOD)
  const loadableFeed = useRecoilValueLoadable(queryFeedParameters)

  const apod = loadableAPOD.contents
  const feed = loadableFeed.contents

  return (
    <>
      <Head>
        <title>SentiNEO</title>
      </Head>
      {loadableAPOD.state === 'hasValue' && !apod.code && !apod.error && (
        <>
          <CardAPOD {...apod} />
          <Spacer h={1} />
        </>
      )}
      {loadableFeed.state === 'hasValue' && <TableReport {...feed} />}
      {(loadableFeed.state === 'loading' || loadableAPOD.state === 'loading') && <Loading>Loading</Loading>}
    </>
  )
}

export default Home
