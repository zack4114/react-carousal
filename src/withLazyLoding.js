import React, { Suspense } from 'react'

function withLazyLoding(LazyComponent) {
    return (props) => <Suspense fallback={<div>
        Loading...
    </div>}>
        <LazyComponent {...props}/>
    </Suspense>
}

export default withLazyLoding;
