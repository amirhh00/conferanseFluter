import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import demo from './impress-demo';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var c = document.getElementById("canv"),
      p = c.getContext("2d"),
      col = function (t, n, o, r, c) {
        p.fillStyle = "rgb(" + o + "," + r + "," + c + ")",
          p.fillRect(t, n, 1, 1)
      },
      R = function (t, n, o) {
        return Math.floor(10 + 40 * Math.cos((t * t - n * n) / 300 + o));
      },
      G = function (t, n, o) {
        return Math.floor(10 + 40 * Math.sin((t * t * Math.cos(o / 4) + n * n * Math.sin(o / 3)) / 300));
      },
      B = function (t, n, o) {
        return Math.floor(10 + 40 * Math.sin(5 * Math.sin(o / 9) + ((t - 100) * (t - 100) + (n - 100) * (n - 100)) / 1100));
      },
      t = 0,
      run = function () {
        var x, y;
        for (x = 0; x <= 35; x++) {
          for (y = 0; y <= 35; y++) {
            col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
          }
        }
        t += 0.005, window.requestAnimationFrame(run)
      };
    run();
  }

  render() {
    return (
      <Impress progress={true} hint={false} >
        {
          demo.map((d, index) => {
            return (
              React.createElement(Step, {
                id: d.id,
                className: d.className,
                data: d.data,
                key: index,
                duration: d.duration ? d.duration : 1200
              },
                d.content.map((child, index) => {
                  return (
                    React.cloneElement(child, {
                      id: child.id,
                      className: child.className,
                      key: index
                    })
                  );
                }))

            );
          })
        }
      </Impress>
    );

  }
}

const mapStateToProps = state => ({
});

function mapDispatchToProps(dispatch) {
}

export default connect(null, null)(Home);
