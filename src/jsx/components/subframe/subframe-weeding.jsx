class SubFrameWeeding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "grove",
        ct_name: "手套",
        desc: "人家沒錢，只買的起手套。"
      },
      {
        name: "sickle",
        ct_name: "鐮刀",
        desc: "這是鐮刀不是香蕉刀。"
      },
      {
        name: "hoe",
        ct_name: "鋤頭",
        desc: "你好，我是鋤頭也有人叫我豬頭。"
      },
      {
        name: "spray",
        ct_name: "微生物除草劑",
        desc: "利用寄主專一性，感染致病力強的植物病原菌或其酵素來消除雜草。"
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

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame weeding" id="sub-frame">
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

