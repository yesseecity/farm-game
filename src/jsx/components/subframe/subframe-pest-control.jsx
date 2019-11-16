class SubFramePestControl extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        name: "item1",
        ct_name: "生物性農藥",
        desc: "說明欄"
      },
      {
        name: "item2",
        ct_name: "茶皂素",
        desc: "說明欄"
      },
      {
        name: "item3",
        ct_name: "除蟲菊精",
        desc: "說明欄"
      },
      {
        name: "item4",
        ct_name: "礦物油",
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
          >{item.ct_name}</div>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame pest-control" id="sub-frame">
        <div className="description">
        蟲害防治-子畫面-道具說明 
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

