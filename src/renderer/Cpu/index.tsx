import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typegraphy from '@mui/material/Typography';

import { ICpu } from '../../main/si/cpu';

const Cpu = () => {
  const [brand, setBrand] = useState('');
  const [cores, setCores] = useState(1);

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('cpu', []);

    window.electron.ipcRenderer.on('cpu', (e) => {
      const data = e as ICpu;
      setBrand(data.cpu.brand);
      setCores(data.cpu.cores);
    });
  }, []);

  return (
    <>
      <Typegraphy variant="h6">CPU: {brand}</Typegraphy>
      <Typegraphy variant="h6">Cores: {cores}</Typegraphy>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </>
  );
};

export default Cpu;
