import { Injectable } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ArticleServiceService {
  articleGroup: any = [
    {
      title: 'Exemplars Health',
      content: "I tackle every big new problem by asking two questions: Who has dealt with this problem well? And what can we learn from them? @ExemplarsHealth will help to fill the gap in global health knowledge sharing and to accelerate progress in saving lives.",
      readTime: '32',
      author: 'Bill Gates',
    },
    {
      title: 'Ballot Box',
      content: "As people exercise their right to protest all across the country––let the undeniable paths of our progress be a guide going forward: peaceful, sustained protest; strategic, committed organizing; and purposeful, overwhelming participation at the ballot box.",
      readTime: '30',
      author: 'Barack Obama ',
    },
    {
      title: 'The Career Advice I Wish I Had At 25',
      content:
        "In the future, when we turn 50, we will each be given a ticket to a time machine and, just once, we will be able to go back in time and talk to our 25-year-old selves.Even then, time travel will be expensive and wreak havoc with frequent flyer programs. So there will only be one trip. So what if we could? What would we say? What advice would we give? ",
      readTime: '52',
      author: 'Shane Rodgers',
    },
    {
      title: 'What Should I Do With My Life?',
      content:
        "It’s time to define the new era. Our faith has been shaken. We’ve lost confidence in our leaders and in our institutions. Our beliefs have been tested. We’ve discredited the notion that the Internet would change everything (and the stock market would buy us an exit strategy from the grind). Our expectations have been dashed. We’ve abandoned the idea that work should be a 24-hour-a-day rush and that careers should be a wild adventure. Yet we’re still holding on.",
      readTime: '65',
      author: 'Po Bronson',
    },
    {
      title: "Choices You'll Regret Forever",
      content:
        "Our days are filled with a constant stream of decisions. Most are mundane, but some are so important that they can haunt you for the rest of your life. A recent study from Columbia University found that we’re bogged down by more than 70 decisions a day. The sheer number of decisions we have to make each day leads to a phenomenon called decision fatigue, whereby your brain actually tires like a muscle.",
      readTime: '49',
      author: 'Dr. Travis Bradberry',
    },
    {
      title: 'My Metric for Success',
      content:
        "John Lennon said: “When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.” I find this sentiment to be so incredibly powerful and true.",
      readTime: '47',
      author: 'Richard Branson',
    },
  ];
  callLatest() {
    return this.articleGroup[0];
  }
  showLastFive() {
    return this.articleGroup;
  }
  addArticle(data: any) {
    this.articleGroup.unshift(data);
  }
  callTitles() {
    return this.articleGroup;
  }

  constructor() {}
}
