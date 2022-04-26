import { NextPageContext } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { queryNeoAsteroid } from '@/recoil/neo'
import { Loading, Spacer } from '@geist-ui/react'
import { useRecoilValueLoadable } from 'recoil'

const CardObjectBasic = dynamic(() => import('@/components/Card/Object/Basic'))
const CardObjectOrbit = dynamic(() => import('@/components/Card/Object/Orbit'))
const TableCloseApproach = dynamic(() => import('@/components/Table/CloseApproach'))

const Asteroid = ({ id }) => {
  const loadable = useRecoilValueLoadable(queryNeoAsteroid(id))
  const data = loadable.contents

  return (
    <>
      <Head>
        <title>SentiNEO | {data.name}</title>
      </Head>
      {loadable.state === 'hasValue' && (
        <>
          <CardObjectBasic {...data} />
          <Spacer h={1} />
          <CardObjectOrbit {...data} />
          <Spacer h={1} />
          <TableCloseApproach {...data} />
        </>
      )}
      {loadable.state === 'loading' && <Loading>Loading</Loading>}
    </>
  )
}

Asteroid.getInitialProps = async (ctx: NextPageContext) => {
  return { ...ctx.query }
}

export default Asteroid
