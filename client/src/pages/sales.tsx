import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Sales analytics and revenue tracking will be shown here.</p>
      </CardContent>
    </Card>
  );
}
