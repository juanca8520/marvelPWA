import React from 'react';

export default class Heroes extends React.Component {
    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('heroe') === null)
                this.setState({ heroe: "loading..." })
            else
                this.setState({ heroe: localStorage.getItem('heroe') });
        }

        var url = new URL("https://gateway.marvel.com:443/v1/public/characters"),
            params = { ts: 1, apikey: "33ec0aef1eb849912a167477119ae07a", hash: "764f6d495db487971c342f8a2b3e3db9" }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res=>{
                console.log(res.json())
                this.setState({ heroes: res });
                localStorage.setItem('heroes', res);
            })
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

