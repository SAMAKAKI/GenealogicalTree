  import React, { useEffect, useState } from 'react';
  import { dia, shapes } from 'jointjs';
  import 'jointjs/dist/joint.css';
  import { Formularz } from '../formularz';
  import { Button } from '@nextui-org/react';

  export const Treediagram: React.FC = () => {
    const [graph, setGraph] = useState<dia.Graph | null>(null);
    const [id, setId] = useState<number>(() => {
      const savedId = localStorage.getItem('lastId');
      return savedId ? parseInt(savedId) : 1;
    });
    const [rectangles, setRectangles] = useState<{ [key: number]: dia.Element }>({});

    useEffect(() => {
      const newGraph = new dia.Graph({}, { cellNamespace: shapes });
      const paper = new dia.Paper({
        el: document.getElementById('paper') as HTMLElement,
        model: newGraph,
        width: 800,
        height: 600,
        gridSize: 10,
        drawGrid: true,
        cellViewNamespace: shapes,
      });
      setGraph(newGraph);

      loadGraphData(newGraph);

      window.addEventListener('beforeunload', saveGraphData);
      return () => {
        window.removeEventListener('beforeunload', saveGraphData);
      };
    }, []);

    const addPerson = (name: string, birthDate: string, deathDate: string, linkedId: number) => {
      if (graph) {
        const rect = new shapes.standard.Rectangle();
        rect.position(Math.random() * 600, Math.random() * 500);
        rect.resize(150, 50);
        rect.attr({
          body: { fill: 'lightblue' },
          label: {
            text: `ID: ${id}\n${name}\n${birthDate} - ${deathDate}`,
            fill: 'black',
            fontSize: 10,
            fontWeight: 'bold',
          },
        });
        graph.addCell(rect);
        setRectangles(prevRectangles => ({ ...prevRectangles, [id]: rect }));

        if (rectangles[linkedId]) {
          const link = new shapes.standard.Link();
          // Konwertuj identyfikator na liczbę całkowitą
          const linkedIdInt = parseInt(linkedId);
          link.source(rectangles[linkedIdInt]); // Użyj sparsowanej wartości
          link.target(rect);
          graph.addCell(link);
        }
        

        setId(prevId => {
          const newId = prevId + 1;
          localStorage.setItem('lastId', newId.toString());
          return newId;
        });
        saveGraphData();
      }
    };

    const saveGraphData = () => {
      if (graph) {
        const cells = graph.toJSON().cells;
        localStorage.setItem('graphData', JSON.stringify(cells));
      }
    };

    const loadGraphData = (graph: dia.Graph) => {
      const savedData = localStorage.getItem('graphData');
      if (savedData) {
          const cells = JSON.parse(savedData);
          graph.fromJSON({ cells });
  
          const loadedRectangles: { [key: number]: dia.Element } = {};
          cells.forEach((cell: any) => {
            if (cell.type === 'standard.Rectangle') {
              // Parsuj identyfikator do liczby całkowitej
              const id = parseInt(cell.id);
              loadedRectangles[id] = graph.getCell(cell.id);
            }
          });
          
          setRectangles(loadedRectangles);
      }
  };
  

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 2 }}>
          <Formularz onAddPerson={addPerson} />
          <Button onClick={saveGraphData}>zapisz</Button>
        </div>
        <div id="paper" style={{ border: '1px solid black', flex: 3 }} className="m-10"></div>
      </div>
    );
  };
