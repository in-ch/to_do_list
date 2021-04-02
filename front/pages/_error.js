function Error({statusCode}) {
    return (
        <p>
            {statusCode
            ? `${statusCode} `
            : `오류가 발생하였습니다.`}
        </p>
    )
}

Error.getInitialProps = ({res,err})=> {
    const statusCode = res ? res.statusCode : err ? err.statusCode: 404
    return { statusCode }
}

export default Error;