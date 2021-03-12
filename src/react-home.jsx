class Header extends React.Component {
    render() {
        return (
            <header>
                <a> 
                    <img id="logo" src="logo.gif"/>
                </a>
                <nav>
                    <ol>
                        <li><a>State of Parking</a></li>
                        <li><a>Why A.I?</a></li>
                        <li><a>Our Product</a></li>
                    </ol>
                </nav>
           </header>
        );
    }
}

class Info extends React.Component {
    render() {
        return (
            <main id="information">
                <h1>The Dilema of Parking!</h1>
                <p>Current parking methods are inefficient, they are time consuming,
                   costly, and stressful.This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                </p>
                <img class="parkinglot" src="busylot.jpg"></img>
                <h1>The Dilema of Parking!</h1>
                <p>Current parking methods are inefficient, they are time consuming,
                   costly, and stressful.This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                </p>
                <h1>The Dilema of Parking!</h1>
                <p>Current parking methods are inefficient, they are time consuming,
                   costly, and stressful.This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                </p>
                <h1>The Dilema of Parking!</h1>
                <p>Current parking methods are inefficient, they are time consuming,
                   costly, and stressful.This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                   Current parking methods are inefficient, they are time consuming,
                   costly, and stressful. This is Filler text purely for demonstrating scroll, 
                   This is Filler text purely for demonstrating
                </p>
            </main>
        );
    }
};

class Footer extends React.Component {
    render() {
        return (
            <footer id="resources">
                <ol>
                    <li>Gihub</li>
                    <li>Contact Us</li>
                </ol>
            </footer>
        );
    }
}

class Board extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Info />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById("home")); 