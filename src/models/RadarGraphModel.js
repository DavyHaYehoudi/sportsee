class RadarGraphModel {
  constructor(data) {
    this.data = data;
    this.kindTraduct = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
  }

  // Méthode pour formater les données du graphique radar
  formatRadarGraphData() {
    return this.data?.data?.data.map((perfKind) => ({
      ...perfKind,
      kind: this.kindTraduct[perfKind.kind],
    }));
  }
}

export default RadarGraphModel;
