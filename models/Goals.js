class Goal {
  constructor(
    id,
    title,
    imageUrl,
    createdDate,
    activeOrComplete,
    completedDate,
    description
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.activeOrComplete = activeOrComplete;
    this.completedDate = completedDate;
    this.description = description;
  }
}

export default Goal;
