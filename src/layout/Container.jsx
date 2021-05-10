import React from 'react'

const Container = ({children}) => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto flex">
            {children}
        </div>
    )
}

export default Container
