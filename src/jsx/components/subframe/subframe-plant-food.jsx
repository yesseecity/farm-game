class SubFramePlantFood extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        name: "plant-food",
        ct_name: "有機肥料",
        desc: "說明欄"
      },
      {
        name: "plant-food2",
        ct_name: "有機牛糞",
        desc: "說明欄"
      },
      {
        name: "plant-food3",
        ct_name: "有機雞糞",
        desc: "說明欄"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          >{item.ct_name}</div>)
      }
      itemsDom.push(<div className="item">未開放</div>)

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame plant-food" id="sub-frame">
        <div className="description">
        肥料-子畫面-道具說明 
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

