class AccountInfo extends React.Component{
  render() {
    return (
      <div className="account-info">
        <div className="level">Lv 1</div>
        <div className="exp">
          <div className="full-exp">
            <div className="real-exp"></div>
          </div>
          <span className="text">xp</span>
        </div>
        <div className="money">$ 100,010</div>
      </div>
    );
  }
}

class Shop extends React.Component{
  render() {
    return (
      <div className="shop">
        <i className="fas fa-store"></i>
      </div>
    );
  }
}
class Weather extends React.Component{
  render() {
    return (
      <div className="weather">
        <i className="fas fa-cloud-moon"></i>
        <span className="temperature-text">25</span>
        <i className="fas fa-temperature-low"></i>
      </div>
    );
  }
}
class SubField extends React.Component {
  render() {
    return (
      <div className="sub-field"></div>
    );
  }
}
class Field extends React.Component {
  renderSubField() {
    let field_list = [];
    for(var i=0;i<=20;i++) {
      field_list.push(<div className="sub-field" value={i}></div>)
    }
    return field_list
  }

  render() {
    return (
      <div className="field">
        {this.renderSubField()}
      </div>
    );
  }
}

class MailBox extends React.Component {
  render() {
    return (
      <div className="mail-box">
        mail-box
      </div>
    );
  }
}

class ToolBoxRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      hiddenOffset: 'hidden',
      arrowIconRotate: ''
    }
  }
  hiddenHandler(){
    if (this.state.hidden) {
      this.setState ({
        hidden: false,
        hiddenOffset: '',
        arrowIconRotate: 'rotate'
      });
    } else {
      this.setState({
        hidden: true,
        hiddenOffset: 'hidden',
        arrowIconRotate: ''
      });
    }
  }

  render() {
    return (
      <div className={'tools-box right '+this.state.hiddenOffset}>
        <div className="arrow" onClick={()=>this.hiddenHandler()}>
          <i className={'fas fa-angle-left '+this.state.arrowIconRotate}></i>
        </div>
        <div className="tool seed" onclick="subframe('seed')">
          播種
        </div>
        <div className="tool water" onclick="subframe('water')">
          <i className="fas fa-tint"></i>
        </div>
        <div className="tool pest-control" onclick="subframe('pest-control')">
          <i className="fas fa-spider"></i>
        </div>
        <div className="tool plant-food" onclick="subframe('plant-food')">
          施肥
        </div>
        <div className="tool weeding" onclick="subframe('weeding')">
          除草
        </div>
      </div>
    );
  }
}

class ToolBoxLeft extends React.Component {
  render() {
    return (
      <div className="tools-box left">
        <div className="tool harvest">收成</div>
      </div>
    );
  }
}

class SubFrame extends React.Component {
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  dismiss() {
    this.unmountMe();
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        子畫面-道具說明 
        </div>
        <i className="fas fa-times" onclick={()=>this.dismiss()}></i>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
      </div>
    );
  }
}

class MainFrame extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="main-frame">
        <AccountInfo />
        <Shop />
        <Weather />
        <Field />
        <div className="fence" hidden>
          <div className="fence-divs">
            <div className="fence-1"></div>
            <div className="fence-2"></div>
            <div className="fence-3"></div>
            <div className="fence-4"></div>
            <div className="fence-5"></div>
            <div className="fence-6"></div>
          </div>
        </div>
        <MailBox />
        <ToolBoxRight />
        <ToolBoxLeft />
        <SubFrame />
      </div>
    );
  }
}

ReactDOM.render(
  <MainFrame />, 
  document.getElementById('root')
)