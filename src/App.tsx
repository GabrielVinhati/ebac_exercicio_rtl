import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://http2.mlstatic.com/D_NQ_NP_603453-MLB70218419407_062023-O-jogo-de-xadrez-tabuleiro-medieval-bruxo-jogo-completo-resina.webp">
        Olha só que legal meu novo tabuleiro de Xadrez do Harry Potter.
      </Post>
    </div>
  );
}

export default App;
