import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models';

class CalendarWidget extends LitElement {
    static properties = {
        currentYear: { type: Number },
        currentMonth: { type: Number },
        currentTasks: { type: Array }
    };
    
    static styles = css`
    :host {
        display: block;
        width: 400px;
        height: auto;
        margin: auto;
        padding: 0;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        box-sizing: border-box;
        border: 20px solid #b38add;
    }
    .calendar-header {
        background-color: #b38add;
        color: white;
        padding: 12px;
        font-size: 20px;
        text-align: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #f3f3f3;
    }
    .days-header, .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        gap: 2px;
        padding: 10px;
    }
    .day, .empty {
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ccc;
    }
    .today {
        background-color: #4CAF50;
        color: white;
    }
`;

constructor() {
    super();
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.currentTasks = [];
}

}



