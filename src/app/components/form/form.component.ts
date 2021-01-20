import { Component, OnInit } from "@angular/core";
import { BasicInput } from "../models/basic-input";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  input1: BasicInput = {
    id: "a",
    label: "Example Input",
    placeholder: "Type yer data here",
    inputtype: "text",
    gatitos: "Holi"
  };
  // input1 = {id: 'a', label: 'Example Input',  type: 'text'};

  constructor() {}

  ngOnInit(): void {}
}
