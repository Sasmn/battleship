import './styles.css';
import buildGameboard from './factory_functions/buildGameboard';
import buildGrid from './functions/create/buildGrid';


for (let i = 0; i < 2; i++) {
    const b = buildGameboard();
    buildGrid(b.gb, b.p);
}
