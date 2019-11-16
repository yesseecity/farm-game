class SubFramePlantFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "plant-food",
        ct_name: "有機肥料",
        desc: "市售的有機肥料，植物的最愛。"
      },
      {
        name: "plant-food2",
        ct_name: "有機牛糞",
        desc: "農家自己做的有機牛糞，含氮量似乎有點高。"
      },
      {
        name: "plant-food3",
        ct_name: "有機雞糞",
        desc: "農家自己弄的有機雞糞，含氮量似乎有點高。"
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
  renderDesc(desc) {
    this.setState({'desc': desc})
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          onMouseOver={()=>{this.renderDesc(item.desc)}}
          >{item.ct_name}</div>)
      }
      itemsDom.push(<div className="item disable"></div>)

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame plant-food" id="sub-frame">
        <div className="description">
          {this.state.desc}
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

