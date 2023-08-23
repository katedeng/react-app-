import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
	const items = [ 'New York', 'San Francisco', 'Tokyo', 'London', 'Paris' ];
	
	const handleSelectItem = (item: string) => {
		console.log(item)
	}
	return (
		<div>
			<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
			<Alert>
				Hello,<span> God!</span>
			</Alert>
		</div>
	);
}

export default App;
