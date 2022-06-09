class Board{
	constructor(
		id,
		title,
		content,
		writer,
		timeStamp = new Date()){

		this.id = id;
		this.title = title;
		this.content = content;
		this.writer = writer;
	}
}

export default Board;