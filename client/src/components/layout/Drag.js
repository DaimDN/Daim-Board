import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './drag.css'


const getItems = count =>
Array.from({ length: count }, (v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `${k}` ,
}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 9;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 7,
  margin: `0 ${grid}px 0 0px`, //#2A3EB1
  color: 'white',
  background: isDragging ? '#ff0266' : 'rgb(0,0,0,0.8)',
  borderRadius: '20px',


  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
 
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});

export default class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(6),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount(){
      var data = [
          {"id": "item-0", content: 'Morning Jog'},
          {"id": "item-1", content: 'Hackathons'},
          {"id": "item-2", content: "Working "},
          {"id": "item-3", content: 'Coding'},
          {"id": "item-4", content: 'React and Js'},
        
        
        ];
      this.setState({
          items: data
      })
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }


  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
            
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                        className="touch"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                    
                      {item.content}<br/><br/>
                      <i class="fas fa-plus-circle fa-2x " style={{color: 'white'}}></i>
                     


                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

