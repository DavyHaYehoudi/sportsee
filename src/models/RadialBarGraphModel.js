class RadialBarGraphModel {
  constructor(data) {
    this.data = data;
  }

  // Méthode pour formater les données du graphique radial
  formatRadialBarGraphData() {
    const { todayScore, score } = this.data.data;
    const dataScore = todayScore ? todayScore : score;
    return [{ name: "score", value: dataScore }];
  }
}

export default RadialBarGraphModel;
