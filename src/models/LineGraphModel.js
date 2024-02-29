class LineGraphModel {
  constructor(data) {
    this.data = data;
  }

  // Méthode pour formater les données du graphique en lignes
  formatLineGraphData() {
    const initialDay = ["L", "M", "M", "J", "V", "S", "D"];
    return this.data?.map((session, index) => ({
      day: initialDay[index],
      sessionLength: session.sessionLength,
    }));
  }
}

export default LineGraphModel;
