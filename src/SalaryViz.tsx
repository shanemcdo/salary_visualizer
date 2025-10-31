import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import styles from './App.module.scss';

type Props = {
	salary: number;
};

function toCurrency(num: number,): string {
	return num > 1
		? `$${(parseFloat(num.toFixed(2))).toLocaleString()}`
		: `¢${(num * 100).toLocaleString()}`;
}

const App: Component<Props> = (props) => {
	const perMonth = () => props.salary / 12
	const perWeek = () => props.salary / 52
	const perDay = () => props.salary / 365
	const perHour = () => perDay() / 24
	const perMinute = () => perHour() / 60
	const perSecond = () => perMinute() / 60
	const perMillisecond = () => perSecond() / 1000;
	return <>
		<p>Salary per Year = {toCurrency(props.salary)}</p>
		<p>Salary per Month = {toCurrency(perMonth())}</p>
		<p>Salary per Week = {toCurrency(perWeek())}</p>
		<p>Salary per Day = {toCurrency(perDay())}</p>
		<p>Salary per Hour = {toCurrency(perHour())}</p>
		<p>Salary per Minute = {toCurrency(perMinute())}</p>
		<p>Salary per Second = {toCurrency(perSecond())}</p>
	</>;
};

export default App;
