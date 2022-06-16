import { NextPage, NextPageContext } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Loading, Spacer } from '@geist-ui/core'
import packageData from 'package.json'
import { useRecoilValueLoadable } from 'recoil'

import { queryNeoAsteroid } from '@/recoil/neo'

const CardObjectBasic = dynamic(() => import('@/components/Card/Object/Basic'))
const CardObjectOrbit = dynamic(() => import('@/components/Card/Object/Orbit'))
const TableCloseApproach = dynamic(() => import('@/components/Table/CloseApproach'))

interface AsteroidProps {
  id: string
}

const Asteroid: NextPage<AsteroidProps> = ({ id }) => {
  const loadable = useRecoilValueLoadable(queryNeoAsteroid(id))
  const data = loadable.contents

  return (
    <>
      <Head>
        <title>
          {packageData.displayName} | {data.name}
        </title>
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
  return { id: ctx.query.id as string }
}

export default Asteroid
