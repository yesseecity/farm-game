class SubFrameHarvest extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  renderItem() {
    var itemsDom = []

    let itemsName = Object.keys(this.props.harvest['harvest']);
    for (let itemName of itemsName){
      let amount = this.props.harvest['harvest'][itemName]
      // console.log('itemName: ', itemName)
      // console.log('amount: ', amount)
      let dom = <div className={'item '+itemName}>
          <div className={'img '+itemName}></div>
          <div className="price">$ 20</div>
          <input className="count" type="number" Max={amount} Min="0" />
        </div>;
      itemsDom.push(dom);
    }
    return itemsDom;
  }
  render() {
    return (
      <div className="sub-frame harvest" id="sub-frame">
        <div className="header">
          收成
        </div>

        <div className="items">
          {this.renderItem()}
        </div>
        <div className="submit">
          訂購
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

