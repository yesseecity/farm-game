class SubFrameWeeding extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        name: "grove",
        ct_name: "手套",
        desc: "說明欄"
      },
      {
        name: "sickle",
        ct_name: "鐮刀",
        desc: "說明欄"
      },
      {
        name: "hoe",
        ct_name: "鋤頭",
        desc: "說明欄"
      },
      {
        name: "spray",
        ct_name: "生化除草劑",
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

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame weeding" id="sub-frame">
        <div className="description">
        除草-子畫面-道具說明 
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

