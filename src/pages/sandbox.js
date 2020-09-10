import React from 'react'
import Layout from '../components/Layout/layout'
import Slides from '../components/Sandbox/Slides'

export default function sandbox() {
    return (
        <Layout>
            Sandbox!
            <div className="sandbox-playground">
                <Slides />
            </div>
        </Layout>
    )
}