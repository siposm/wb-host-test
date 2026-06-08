import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
	title = "Hosting Demo"
	todos: string[] = []
	words: string[] = []
	newTodo: string = ""

	constructor(private http: HttpClient) {}

	download(): void {
		this.http.get<string[]>("https://api.siposm.hu/word").subscribe(x => {
			console.log(x)
			this.words = x
		})
	}

	add(): void {
		this.todos.push(this.newTodo)
		this.newTodo = ""
	}

	ngOnInit(): void {
		this.todos.push("Kenyeret kell venni","Csomagolás kirándulásra","Kutyát meg kell etetni")
	}
}
