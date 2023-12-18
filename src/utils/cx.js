
export default function cx(...args) {
    return args
        .filter(Boolean)
        .map(arg => {
            if (typeof arg === 'string') {
                return arg
            } else if (typeof arg === 'object') {
                return Object.entries(arg)
                    .filter(([_key, value]) => value)
                    .map(([key]) => key)
                    .join(' ')
            }
        })
        .join(' ')
        .trim()
}

