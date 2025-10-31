import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { useSearchParams } from '@solidjs/router';
import SalaryViz from './SalaryViz';
import styles from './App.module.scss';

const App: Component = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return <>
		<Show when={searchParams.salary} fallback={<>
			<h1>Title here!</h1>
			<button onclick={() => {
				setSearchParams({ 'salary': 50_000 });
			}}>Test</button>
		</>}>
			<SalaryViz salary={parseInt(searchParams.salary!, 10)} />
		</Show>
	</>;
};

export default App;
