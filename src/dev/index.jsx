import { useState } from "react"

function Dev() {

    const [test, setTest] = useState([
        {
            id: '',
            name: '',
            grade: '',
            icon: ''
        }
    ])


    const [alls, setAlls] = useState([])

    const testOne = () => {
        const base = "https://api.arsha.io/"
        const body = "util/db"
        const id = 736018
        const lang = "en"
        const url = base + body
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Content-Length': 0,
                'Host': 'bdo',
                'User-Agent': 'runtime',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'id': 736018,
                'lang': 'en'
            },
            mode: 'no-cors'
        };

        console.log(requestOptions)

        fetch("https://api.arsha.io/util/db", requestOptions)
            .then(response => console.log(response))
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    const testAll = () => {
        const base = "https://api.arsha.io/"
        const body = "util/db"
        const id = "dump"
        const lang = "tr"
        const url = base + body + "/" + id + "?lang=" + lang

        fetch(url, {mode: 'no-cors'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    


    return (
        <div>
            <button onClick={testAll}>ALL</button><br />
            <button onClick={testOne}>GET</button><br />
            <span>id: {test.id}</span><br />
            <span>name: {test.name}</span><br />
            <span>grade: {test.grade}</span><br />
            <span>icon: {test.icon}</span>
        </div>
    )
}

export default Dev;