

function toggleWatchedStatus(id, idWatched, setIdWatched) {
    let array;
    if (idWatched.includes(id)){
        array = idWatched.filter(keyId => keyId !== id)
    } else {
        array = [...idWatched, id]
    }
    setIdWatched(array)
    }
export { toggleWatchedStatus };