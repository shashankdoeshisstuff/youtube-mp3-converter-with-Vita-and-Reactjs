
function App() {
  return (
  <div className="app">
    <span className="logo">youtube-to-mp3</span>
    <section className="content">
      <h1 className="content_title">YouTube to MP3 Converter</h1>
      <p className="content_description">
        Transform YouTube video into MP3s in just a few clicks!
      </p>

      <form className="form">
        <input placeholder="Paste a Youtube video URL link..." 
        type="text" className="form_input" />
        <button type="submit" className="form_button">Search</button>
      </form>

      <a href="" className="download_btn">Download MP3</a>
    </section>
  </div>
  )
}

export default App
