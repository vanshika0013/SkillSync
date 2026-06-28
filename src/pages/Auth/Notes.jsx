import { useState, useEffect } from "react";
import "./Notes.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { saveUserData, getUserData } from "../../utils/storage";

function Notes() {
  // ── Do NOT use lazy initializer here — auth.currentUser is null at first render
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editId, setEditId] = useState(null);

  // ── Load notes only after Firebase confirms the user ────────────────────────
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const savedNotes = getUserData("notes") || [];
        setNotes(savedNotes);
      }
    });
    return () => unsubscribe();
  }, []);

  // ── Persist notes whenever they change ──────────────────────────────────────
  useEffect(() => {
    // Only persist if Firebase user is already set (avoids saving empty array on first render)
    if (auth.currentUser) {
      saveUserData("notes", notes);
    }
  }, [notes]);

  function handleNote() {
    if (!title.trim() || !desc.trim()) {
      return;
    }

    // EDIT MODE
    if (editId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editId ? { ...note, title, desc } : note
        )
      );

      setEditId(null);
      setTitle("");
      setDesc("");
      return;
    }

    // ADD MODE
    const newNote = {
      id: Date.now(),
      title,
      desc,
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setDesc("");
  }

  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleEdit(note) {
    setTitle(note.title);
    setDesc(note.desc);
    setEditId(note.id);
  }

  return (
    <div className="notes-page">

      {/* Navbar */}

      <nav className="notes-navbar">

        <div className="logo">
          <span>&lt;/&gt;</span>
          <h2>SkillSync</h2>
        </div>

        <button
          className="dashboard-btn"
          onClick={() => window.history.back()}
        >
          ← Dashboard
        </button>

      </nav>

      {/* Hero Section */}

      <section className="notes-hero">

        <h1>📝 My Notes</h1>

        <p>
          Save ideas, resources, learning reminders and important concepts.
        </p>

      </section>

      {/* Form Section */}

      <section className="notes-form">

        <h2>
          {editId !== null ? "Edit Note" : "Create a New Note"}
        </h2>

        <input
          type="text"
          value={title}
          placeholder="Enter note title..."
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={desc}
          placeholder="Write your note here..."
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="add-notes" onClick={handleNote}>
          {editId !== null ? "💾 Save Changes" : "➕ Add Note"}
        </button>

      </section>

      {/* Notes Heading */}

      <div className="notes-heading">
        <h2>Your Notes</h2>
        <span>{notes.length} Notes</span>
      </div>

      {/* Notes Grid */}

      <div className="notes-container">

        {notes.length === 0 ? (
          <div className="empty-notes">
            <h3>📝 No Notes Yet</h3>
            <p>
              Start writing your first note and build your personal knowledge library.
            </p>
          </div>
        ) : (
          notes.map((note) => (
            <div className="note-card" key={note.id}>

              <div className="note-top">
                <h3>{note.title}</h3>
              </div>

              <p>{note.desc}</p>

              <div className="note-buttons">

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(note)}
                >
                  ✏ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(note.id)}
                >
                  🗑 Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Notes;
