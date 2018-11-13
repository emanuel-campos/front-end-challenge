import React, { Component } from 'react';
import PropTypes from 'prop-types';

// estilo Sass para o componente
import './ScrollTable.style.scss';

/**
 * Este componente é uma tabela zebrada com
 * scroll vertical com opção para definir altura
 */

class ScrollTable extends Component {
  render() {
    return (
      <div className="scrolltable">
        <div
          className="scrolltable-wrapper"
          style={{ height: this.props.height }}
        >
          <table>
            <tbody>
              {this.props.rows.map((row, index) => (
                <tr className="scrolltable-row" key={index.toString()}>
                  <td className="scrolltable-row-title">{row.title}</td>
                  <td className="scrolltable-row-value">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ScrollTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  height: PropTypes.string,
};

ScrollTable.defaultProps = {
  height: '250px',
};

export default ScrollTable;
