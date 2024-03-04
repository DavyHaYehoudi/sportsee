class RadarGraphModel {
  constructor(data) {
    this.data = data;
    this.kindTraduct = {
      1: "Vitesse",
      2: "Force",
      3: "Endurance",
      4: "Energie",
      5: "Cardio",
      6: "Intensité",
    };
  }

  // Méthode pour formater les données du graphique radar
  formatRadarGraphData() {
    return this.data?.data?.data?.map((perfKind) => ({
      ...perfKind,
      kind: this.kindTraduct[perfKind.kind],
    }));
  }
}

export default RadarGraphModel;
