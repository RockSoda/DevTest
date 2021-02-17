export function isValidWalk(walk: string[]) {
    if (walk.length != 10) return false

    let longitudes = 0
    let latitudes = 0
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                latitudes++
                break
            case 'e':
                longitudes++
                break
            case 'w':
                longitudes--
                break
            case 's':
                latitudes--
                break
            default:
                break
        }
    }
    return (longitudes == 0 && latitudes == 0)
}

