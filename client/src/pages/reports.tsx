import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Detailed analytics and reporting dashboard will be shown here.</p>
      </CardContent>
    </Card>
  );
}
