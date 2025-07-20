import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Lessons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lessons</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Individual lesson management and content will be displayed here.</p>
      </CardContent>
    </Card>
  );
}
