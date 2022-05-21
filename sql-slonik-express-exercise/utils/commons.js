const queryCatcher = (fn, place) => async query => {
    try {
        const result = await fn(query)

        return {
            ok: true,
            data: result && result.rows ? result.rows : result,
        }
    } catch(error) {
        place && console.info(`[${place}]`)
        console.error('> ', error.message)

        return {
            ok: false,
        }
    }
}

module.exports = {
    queryCatcher,
}