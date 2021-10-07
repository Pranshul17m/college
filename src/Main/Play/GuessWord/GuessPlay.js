import React, { Component } from 'react';
import Play02 from './Play02';
import Play03 from './Play03';
const wordlist = [
    { word: "BOOK", hint: "A written or printed thing" },
    { word: "COMPUTER", hint: "A programmed machine" },
    { word: "TWO", hint: "Smallest even prime no" },
    { word: "WORLD", hint: "earth" }
];

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class GuessPlay extends Component {

    state = {

        exactword: "",
        hint: "",
        shuffledword: "",
        flag: false,
        check: false,
        win: false,
        isSubmit: false,
    }

    st = {
        marginTop: "20px",
        textAlign: "center",
        backgroundColor: " #e6e6ff",
        marginLeft: "200px",
        marginRight: "200px",
        height: "800px",
        marginBottom: "20px"

    }

    // eventChange = (event) => {
    //     this.setState({ string: event.target.value })

    // }

    // saveStatehandler = () => {
    //     if (this.state.string.length > 5) {
    //         this.setState({ flag: true })
    //     }
    //     else {
    //         this.setState({ flag: false })
    //     }

    // }

    delOnClick = (index) => {

        const item = this.state.shuffledword.split("");
        item.splice(index, 1);
        const newitem = item.join("");
        this.setState({ shuffledword: newitem })



    }

    toggleCard = () => {
        const f = this.state.check
        this.setState({ check: !f })


    }
    areEqual = (first, second) => {
        if (first.length !== second.length) {
            return false;
        };
        for (let i = 0; i < first.length; i++) {
            if (!second.includes(first[i])) {
                return false;
            };
        };
        return true;
    };

    submitHandler = () => {
        const arrayshuffled = [...this.state.shuffledword];
        console.log("before soort: " + arrayshuffled);
        arrayshuffled.sort();
        console.log("after sort: " + arrayshuffled);
        const arrayexact = [...this.state.exactword];
        arrayexact.sort();
        console.log("after sort: " + arrayexact);
        if (this.areEqual(arrayexact, arrayshuffled)) {
            this.setState({ win: true, isSubmit: false })
        }
        else {
            this.setState({ isSubmit: true })

        }

    }
    // resetStatehandler = () => {
    //     this.setState({ string: "", flag: false })
    // }

    generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }




    getRandomInt(n) {
        return Math.floor(Math.random() * n);
    }
    shuffle(s) {
        var arr = s.split('');           // Convert String to array
        var n = arr.length;              // Length of the array

        for (var i = 0; i < n - 1; ++i) {
            var j = this.getRandomInt(n);       // Get random of [0, n-1]

            var temp = arr[i];             // Swap arr[i] and arr[j]
            arr[i] = arr[j];
            arr[j] = temp;
        }

        s = arr.join('');                // Convert Array to string
        return s;                        // Return shuffled string
    }


    resetGame() {
        const rqelement = wordlist[this.getRandomInt(wordlist.length)];

        const hint = rqelement.hint;
        const element = rqelement.word;

        console.log("element " + element);
        console.log("hint " + hint);
        const rqlen = element.length * 1.5 - element.length;
        const generatedString = this.generateString(rqlen);
        console.log(generatedString);

        const newString = element.concat('', generatedString).replace(/ /g, '');
        console.log(newString);
        const shuffledString = this.shuffle(newString);
        console.log("new shiffled string" + shuffledString);

        this.setState({ exactword: element, hint: hint, shuffledword: shuffledString })
    }

    componentDidMount() {

        this.resetGame();

    }


    render() {
        const bton = {
            backgroundColor: "#B661F3",
            display: "inline-block",
            color: "white",
            border: "2px solid grey",
            padding: "10px",
            cursor: "pointer",
            textAlign: "center",
            width: "100px",
            height: "50px",
            marginTop: "10px",
            marginBottom: "5px"

        }


        return (<>
            <div>

                <div style={this.st}>
                    <h1>Guess the word!</h1>
                    <h2>Click the word block to remove it</h2>

                    {/* <Play01 change={this.eventChange} value={this.state.string} /> */}
                    <br></br>
                    {/* <button onClick={this.saveStatehandler} style={bton} key={1}>Set</button>
                    <button onClick={this.resetStatehandler} style={bton} key={2}>Reset</button>
                    {/* <h3>Your entered string is: {this.state.string}</h3> */}
                    {/* <h2>Length of string is:{this.state.string.length}</h2> */}
                    <hr></hr>


                    {/* <div>
                        <h3>String status:</h3>
                        {this.state.flag ?
                            <h3>String Accepted Successfully!</h3> : <h3>String too short</h3>
                        }
                    </div> */}
                    <div>
                        {this.state.win && <h3>Congratulations!! You guessed it right! The word is {this.state.exactword}</h3>}
                        {this.state.isSubmit && <p>try gain</p>}
                    </div>

                    {
                        this.state.shuffledword.split("").map((ch, index) => {
                            return <Play02 put={ch}
                                click={() => this.delOnClick(index)} />

                        })


                    }
                    <br></br>
                    <button onClick={this.toggleCard} style={bton} key={3}>Hint</button>
                    <button onClick={this.resetGame.bind(this)} style={bton} key={4}>Reset</button>
                    <br></br>

                    <div>{this.state.check ? <Play03 add={this.state.hint} /> : null
                    }</div>

                    <button onClick={this.submitHandler} style={bton} key={4}>Submit</button>


                </div>

            </div>
        </>
        );
    }
}
export default GuessPlay;