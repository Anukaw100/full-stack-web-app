class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  openSideBar() {
    document.getElementById('sidebar-nav').classList.toggle('collapsed')
  }

  render() {
    return (
      <header>  
        <nav class="mainnav">
            <a class="logo" href="/"> 
              <img src="/images/logo.gif"/>
            </a>
          <ol class="mainnav-list">
            <li><a href="/state-of-parking/">State of Parking</a></li>
            <li><a href="/why-ai/">Why A.I?</a></li>
            <li><a href="/product/">Product</a></li>
          </ol>
          <li class="loginicon"><a href="/login/">Login</a></li>
        </nav>
        
        <div class="sidebar-div">
          <button title="Toggle sidebar" onClick={this.openSideBar}></button>
          <nav id="sidebar-nav" class="collapsed">
            <ol class="sidebar-list">
              <li><a href="/state-of-parking/">State of Parking</a></li>
              <li><a href="/why-ai/">Why A.I?</a></li>
              <li><a href="/product/">Product</a></li>
              <li><a href="/login/">Login</a></li>
            </ol>
          </nav>
        </div>
        
      </header>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <main>
        <div class="container">
          <h1>Parking is tough</h1>
          <img src="/images/busy-parking-lot.jpg" />
          <div class="columns">
            <div class="col col-1">
              <h2>A waste</h2>
              <p>A common problem that drivers face nowadays, especially
              in busy public urban areas, is parking lot congestion
              </p>
            </div>
            <div class="col col-2">
              <h2>No one wins</h2>
              <p>Road rage is undoubtedly a product of the frustration of 
              finding parking spots which can put other drivers at risk. And not 
              only does it cause stress and anger for the drivers behind the 
              wheel but it also means that some are totally abandoning trips all 
              together. This hurts the business that could have had customers 
              but lost them due to customers not wanting to endure the 
              associated parking difficulties. Due to insufficient numbers of 
              parking spots and no idea of where a parking spot may be even 
              available, users who try to find parking spots spend a lot of time
              “cruising” around trying to find empty spots to park their vehicle 
              resulting in wasted time and petrol costs that cause damage to the 
              environment.
              </p>
            </div>
            <div class="col col-1 col-bg">
            <p>Americans spend on average 17 
            hours per year at a cost of $73 billion dollars searching for 
            parking. 
            </p>
            </div>
          </div>
          <div class="columns">
            <div class="col col-3">
              <h2>Current solutions to the problem</h2>
              <p>One solution to this problem is to expand the size and/or 
              quantity of parking areas. This solution presents several
              problems however as opportune land that could be used to construct 
              parking lots is finite and expansion incurs considerable costs on 
              the economy. Architectural constraints in the proposed area would 
              also need to be accounted for, such as building around shops and 
              roads. Hence, infinitely expanding the parking area is a 
              non-viable solution. Another solution is to efficiently direct 
              drivers to empty parking spaces to speed up the parking cycle. 
              Several viable applications already exist on the commercial market 
              to detect occupied parking spaces. Most of these applications use
              physical sensors attached around a parking space to detect the
              presence of a vehicle (Smart Parking Ltd, n.d.; Bosch Connected 
              Devices and Solutions GmbH, n.d.). These applications are able to 
              reliably detect the presence of a vehicle and transfer information 
              based on cloud, wireless, and Internet of Things (IoT) devices. 
              However, scaling this solution application to an expanded parking 
              lot requires proportional investment to install new parking 
              sensors and appropriate receivers. This could result in increased 
              financial burden on the parking lot maintainer, due in part to the 
              greater amount of equipment that needs maintenance after 
              expansion.

              </p>
            </div>
            <div class="col col-1 col-bg">
            <p>
            The focus of our work is to let people know when and where a parking spot is available
This is done using a field in computer vision technology called object detection

            </p>
            </div>
          </div>
          {/* <h1>The Dilema of Parking!</h1>
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
          <br />
          <img src="/images/busy-parking-lot.jpg" /> */}
        </div>
      </main>
    );
  }
};

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ol class="footer-list">
          <li><a href="https://github.com/Anukaw100/parking-detection-ml-website">GitHub</a></li>
          <li>Contact Us</li>
        </ol>
      </footer>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div class="mamook">
        <Header />
        <Info />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById("home"));
