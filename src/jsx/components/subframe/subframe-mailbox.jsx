class SubFrameMailBox extends React.Component {
  constructor(props) {
    super(props)
    this.news = [
      {
        title: '(國際) 2019/11/07 蝗蟲，正在入侵印度 | 征戰斯芬克斯',
        url: 'https://read01.com/oABdNo3.html#.Xc_zRzMzbIU'
      },
      {
        title: '(國內) 2019/11/16 輔導落花生契作契銷農民收益有保障 ',
        url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=630&article_id=5529'
      },
      {
        title: '(國內) 2019/11/12 大宗蔬菜播種量及供苗預警資訊 ',
        url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=307&article_id=45846'
      },
      {
        title: '(國內) 2019/11/15 2019臺灣國際茶業博覽會，讓消費者安心品好茶 ',
        url: 'https://www.afa.gov.tw/cht/index.php?code=list&flag=detail&ids=307&article_id=45857'
      }

    ]
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
      for (let item of this.news) {
        console.log(item.title)
        itemsDom.push(<a href={item.url} target="_blank">{item.title}</a>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame mail-box" id="sub-frame">
        <div className="header">
          農業新聞
        </div>
        <div className="news" onClick={(e)=>{e.stopPropagation()}}>
            {this.renderItem()}
        </div>
               
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

