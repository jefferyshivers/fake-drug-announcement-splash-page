import React, { Component } from 'react';

import '../styles/components/ISI.scss';

const giant_paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin diam felis, id convallis neque imperdiet ut. Nulla id felis iaculis, sagittis lorem in, fermentum sem. Aliquam sem mauris, faucibus a eleifend in, pulvinar et nisi. In egestas est ac venenatis varius. Pellentesque at ligula vulputate, accumsan urna at, porttitor eros. Nullam est lacus, sollicitudin nec nibh a, placerat auctor elit. In ac dui nec sem dignissim efficitur. Duis sed aliquam purus. Cras congue enim nunc, ac accumsan ante dictum quis. Ut dapibus odio a massa elementum, vitae dignissim magna rhoncus. Aliquam neque augue, elementum et mi ut, luctus sodales metus. Aenean rutrum orci quis odio ullamcorper, vel condimentum turpis lacinia. Etiam nisi libero, mollis at rhoncus et, faucibus eu nisi. Aliquam consectetur quam vitae nisi interdum, vel dapibus nisi accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ultrices, eros sed volutpat condimentum, nulla mauris volutpat massa, ut auctor elit magna et massa. Nulla consequat blandit libero, ut varius elit vehicula quis. Nunc nulla eros, varius non nibh nec, accumsan lobortis odio. Cras placerat odio nec ante gravida, luctus fringilla nunc faucibus. Aenean in gravida augue, placerat consequat quam. Maecenas nec porta orci. Proin arcu lectus, interdum feugiat malesuada id, tristique vitae ligula. Sed libero risus, mattis ac maximus vitae, molestie non risus. Sed tempus lacus sit amet mollis porta. Proin non enim dignissim, dictum elit in, volutpat lectus. In hac habitasse platea dictumst. Praesent mattis laoreet lacinia. Vestibulum nec ipsum ut purus vulputate aliquet a in enim. Mauris sagittis dapibus massa, a consequat diam aliquet sit amet. Nam ullamcorper neque non est maximus, a sodales diam volutpat."

class ISI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: 'relative',
        top: 0
      }
    }
  }

  updateISITop = () => {
    let isi = document.getElementById('ISI');    
    // main is the container just above the ISI
    let main = document.getElementById('main');
    // bumper is the invisible div that lets main scroll up to the break point
    let bumper = document.getElementById('bumper');

    let minimumViewableHeight = 154;

    let mainOffset = main.getBoundingClientRect().bottom;
    let maximumOffset = window.innerHeight - minimumViewableHeight;

    let shouldBeFixed = (mainOffset > (maximumOffset - 0));

    let position = shouldBeFixed ? 'fixed' : 'relative';
    let top = shouldBeFixed ? maximumOffset : 0;

    bumper.style.height = shouldBeFixed ? `${minimumViewableHeight + 0.1}px` : 0;

    this.setState({
      style: {
        position: position,
        top: `${top}px`
      }
    });
  }

  componentDidMount = () => {
    this.updateISITop();

    document.addEventListener('scroll', () => {
      this.updateISITop();
    })

    window.addEventListener('resize', () => {
      this.updateISITop();
    })
  }

  render() {
    let style = this.state.style;

    return [
      <div key="bumper" id="bumper"></div>,
      <div key="isi" className="container" id="ISI" style={style}>
        <div className="separator"></div>
        <div className="inner-container">
          <div className="paragraphs">
            <p>
              <em>Indication</em>
            </p>
            <p>
              MAGIC DRUG® is a prescription medicine used to {giant_paragraph + giant_paragraph}
            </p>
            <p>
              <em>Please see the full <a href="/">Prescribing Information</a> and the <a href="/">Patient Information</a></em>.
            </p>
            <p>
              You are encouraged to report negative side effects of prescription drugs to the FDA.
            </p>
            <p>
              Visit <a href="/" className="url">www.fda.gov/medwatch</a> or call 1-900-FDA-1088.
            </p>
          </div>
        </div>
      </div>
    ]
  }
}

export default ISI;

