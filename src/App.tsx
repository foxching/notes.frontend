import { NewNoteModal } from './components/NoteModal';
import NoteTable from './components/NoteTable';

function App() {
  return (
    <div className="App">
      <h3>My Notes</h3>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <div style={{ textAlign: 'right' }}>
          <NewNoteModal />
        </div>
        <NoteTable />
      </div>
    </div>

  );
}

export default App;
