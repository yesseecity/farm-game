class SubFrameWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "watering-can",
        ct_name: "澆水器",
        desc: "經典的澆水器，種植物一定要買一個。"
      },
      {
        name: "pipe",
        ct_name: "水管",
        desc: "接上水龍頭就能帶來源源不絕的水，但要小心水費變很多。"
      },
      // {
      //   name: "water",
      //   ct_name: "微型噴頭",
      //   desc: "說明欄"
      // },
      // {
      //   name: "water",
      //   ct_name: "滴灌管子",
      //   desc: "說明欄"
      // }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
    $('.disable').tooltip({
      content: "這個功能要等正式上現才會開放喔!"
    });
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
      itemsDom.push(<div className='item disable'>未開放</div>)
      itemsDom.push(<div className='item disable'>未開放</div>)

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame water" id="sub-frame">
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

